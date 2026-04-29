import { Box, Stack, Text, Title } from '@mantine/core'
import classes from './CharmCollectionHero.module.css'

export function CharmCollectionHero() {
  return (
    <section className={classes.root} aria-label="Charm Bag Collection">
      <div className={classes.scrim} />
      <div className={classes.bottomFade} />

      <div className={classes.inner}>
        <div className={classes.grid}>
          <div className={classes.left}>
            <Stack gap="sm" align="flex-start" className={classes.leftStack}>
              <Text component="p" className={classes.brand} role="text">
                OKAY KAY
              </Text>

              <Title order={1} className={classes.headline}>
                <span className={classes.headlineLineWhite}>CHARM BAG</span>
                <span className={classes.headlineLineGold}>COLLECTION</span>
              </Title>

              <Text className={classes.sub}>Personalize. Express. Own it.</Text>

              <Text component="p" className={classes.support}>
                A new way to style.
                <br />
                A million ways to make it yours.
              </Text>

              <Text className={classes.status}>COMING SOON</Text>
            </Stack>
          </div>

          <Box className={classes.right}>
            <img
              src="/hero-charm-collection.png"
              alt="Okay Kay Charm Bag Collection — campaign artwork with handbags and charms"
              className={classes.heroImage}
              decoding="async"
            />
          </Box>
        </div>
      </div>
    </section>
  )
}
