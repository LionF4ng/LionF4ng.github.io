# Cursor Displacement Issue

The problem is the interaction between your custom `Cursor` (with `attachToParent`) and the `motion.img` hover animation. When the image scales up (`scale: 1.2`) and shifts up (`y: -10`), the cursor — which is absolutely positioned inside the `<a>` parent at a fixed offset (`left-4 top-7`) — no longer aligns with the visually scaled/shifted image. The cursor stays anchored to the *untransformed* parent box while the image moves away from it.

## Fix

There are a few things to adjust:

### 1. Remove or reduce the `y` translate and re-anchor the cursor

The `y: -10` is the main offender — it shifts the image up but the cursor doesn't follow, creating a visible "jump." If you want the lift effect, apply it to a **wrapper** that also contains the cursor, or reduce/remove it:

```jsx
<motion.img
  whileHover={{ scale: 1.2 }}          // removed y: -10
  whileTap={{ scale: 0.95, y: 5 }}
  transition={easeInOut}
  src={file_path}
  className={cl}
/>
```

### 2. Center the cursor on the parent instead of hardcoding offsets

Replace the hardcoded `left-4 top-7` with centering so it tracks the parent's center regardless of the child's transform:

```jsx
<Cursor
  attachToParent
  variants={{
    initial:   { scale: 0.3, opacity: 0 },
    animate:   { scale: 1,   opacity: 1 },
    exit:      { scale: 0.3, opacity: 0 },
  }}
  transition={{ ease: 'easeInOut', duration: 0.15 }}
  className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
>
  {/* ... */}
</Cursor>
```

### 3. (Optional) Isolate the transform so it never affects the cursor's anchor

If you *do* want the lift on hover, wrap the image in a plain `<div>` and animate that div. The cursor stays attached to the `<a>`, and the inner transform won't shift the anchor point:

```jsx
<a href={url_link} target="_blank" className="cursor-none relative block">
  <Cursor
    attachToParent
    variants={{
      initial:   { scale: 0.3, opacity: 0 },
      animate:   { scale: 1,   opacity: 1 },
      exit:      { scale: 0.3, opacity: 0 },
    }}
    transition={{ ease: 'easeInOut', duration: 0.15 }}
    className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div className="flex items-center">
      <MouseIcon />
      <span className="ml-2 rounded-sm bg-black px-2 py-0.5 text-white">
        {name}
      </span>
    </div>
  </Cursor>

  {/* wrapper absorbs the transform so the <a> box never changes */}
  <motion.div
    whileHover={{ scale: 1.2, y: -10 }}
    whileTap={{ scale: 0.95, y: 5 }}
    transition={easeInOut}
    className="will-change-transform"
  >
    <img src={file_path} className={cl} alt={name} />
  </motion.div>
</a>
```

### 4. Add `relative` to the `<a>` so absolute positioning is stable

Make sure the parent the cursor attaches to has an explicit positioning context:

```jsx
<a ... className="cursor-none relative inline-block">
```

## Why it was happening

| What's happening | Effect on cursor |
|---|---|
| `scale: 1.2` on the image | Image grows 20 % but the `<a>` box (and thus the cursor's anchor) stays the same size → cursor looks "inside" the image |
| `y: -10` on the image | Image visually moves up 10 px; cursor stays → visible gap / displacement |
| `left-4 top-7` on cursor | Hardcoded pixel offsets that were tuned for the *unscaled* image; once the image transforms, the offset is wrong |

By centering the cursor on the parent and/or isolating the transform on a child wrapper, the cursor stays visually glued to the icon no matter what the hover animation does.