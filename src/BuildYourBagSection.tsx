import { Box, Text } from '@mantine/core'
import { IconLink, IconShoppingBag, IconSparkles } from '@tabler/icons-react'
import classes from './BuildYourBagSection.module.css'

const steps = [
  { id: '1', title: 'Choose', subtitle: 'Your Bag', Icon: IconShoppingBag },
  { id: '2', title: 'Add', subtitle: 'Your Charms', Icon: IconLink },
  { id: '3', title: 'Make It', subtitle: 'Yours', Icon: IconSparkles },
]

export function BuildYourBagSection() {
  return (
    <section className={classes.buildHero}>
      <img src="/build-your-bag-hero.png" alt="Build Your Bag campaign artwork" />

      <Box className={classes.buildOverlay}>
        {steps.map((step) => (
          <Box key={step.id} className={classes.stepCard}>
            <span className={classes.stepNumber}>{step.id}</span>
            <step.Icon size={30} stroke={1.8} className={classes.stepIcon} />
            <div className={classes.stepText}>
              <Text className={classes.stepTitle}>{step.title}</Text>
              <Text className={classes.stepSubtitle}>{step.subtitle}</Text>
            </div>
          </Box>
        ))}
      </Box>
    </section>
  )
}
