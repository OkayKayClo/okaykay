import classes from './OkayCharmsStrip.module.css'

export function OkayCharmsStrip() {
  return (
    <section className={classes.root} aria-labelledby="okay-charms-heading">
      <h2 id="okay-charms-heading" className={classes.heading}>
        OKAY CHARMS
      </h2>
      <div className={classes.imageRow}>
        <img
          src="/okay-charms-strip.png"
          alt="Okay Kay signature charms: logo, initial, heart, lock, key, tassel, and mini pouch"
          className={classes.stripImage}
          decoding="async"
          loading="lazy"
        />
      </div>
    </section>
  )
}
