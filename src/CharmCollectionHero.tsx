import classes from './CharmCollectionHero.module.css'

/**
 * Full-bleed campaign hero — all typography and product art live in the image.
 * No live headline, logo, or body copy in HTML (screen-reader title only).
 */
export function CharmCollectionHero() {
  return (
    <section className={classes.root} aria-label="Charm Bag Collection">
      <h1 className={classes.srOnly}>
        OKAY KAY. Charm Bag Collection. Personalize. Express. Own it. Coming soon.
      </h1>

      <div className={classes.imageWrap}>
        <picture>
          <source
            media="(max-width: 900px)"
            srcSet="/hero-charm-collection-mobile.png"
            type="image/png"
          />
          <img
            src="/hero-charm-collection.png"
            alt="Okay Kay Charm Bag Collection — full campaign artwork"
            className={classes.heroImage}
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  )
}
