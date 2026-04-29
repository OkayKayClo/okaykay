import classes from './CharmCollectionHero.module.css'

/**
 * Full-bleed campaign hero — artwork at /hero-charm-collection.png
 * already includes all headline and product visuals; no duplicate live text.
 */
export function CharmCollectionHero() {
  return (
    <section className={classes.root} aria-label="Charm Bag Collection">
      <h1 className={classes.srOnly}>
        OKAY KAY. Charm Bag Collection. Personalize. Express. Own it. Coming soon.
      </h1>

      <div className={classes.imageWrap}>
        <img
          src="/hero-charm-collection.png"
          alt="Okay Kay Charm Bag Collection — handbags, gold charms, and collection details"
          className={classes.heroImage}
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Eases the transition into the rest of the page without covering the art */}
      <div className={classes.bottomFade} aria-hidden="true" />
    </section>
  )
}
