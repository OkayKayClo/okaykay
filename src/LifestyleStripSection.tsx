import { Box, Text } from '@mantine/core'
import classes from './LifestyleStripSection.module.css'

export function LifestyleStripSection() {
  return (
    <section className={classes.root}>
      <img
        src="/okay-kay-lifestyle-charm-bag.png"
        alt="Okay Kay lifestyle campaign with charm bag"
        className={classes.image}
      />
      <Box className={classes.overlay}>
        <Text className={classes.title}>Your bag. Your story.</Text>
        <Text className={classes.sub}>
          Built to change with your mood, your outfit, and your moment.
        </Text>
      </Box>
    </section>
  )
}
