import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core'
import { IconLink, IconShoppingBag, IconSparkles } from '@tabler/icons-react'
import classes from './BuildYourBagSection.module.css'

const steps = [
  { id: '1', title: 'Choose', subtitle: 'Your Bag', Icon: IconShoppingBag },
  { id: '2', title: 'Add', subtitle: 'Your Charms', Icon: IconLink },
  { id: '3', title: 'Make It', subtitle: 'Yours', Icon: IconSparkles },
]

export function BuildYourBagSection() {
  return (
    <section className={classes.root}>
      <Container size="xl" className={classes.container}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" className={classes.topGrid}>
          <Box>
            <Title order={2} className={classes.heading}>
              Build Your Bag
            </Title>
            <Text className={classes.subtext}>
              Start with the base. Add your charms. Make it yours.
            </Text>
            <Text className={classes.micro}>
              A modular charm system designed for personal expression.
            </Text>
          </Box>
          <Box className={classes.imageWrap}>
            <img
              src="/okay-kay-charm-crossbody.png"
              alt="Okay Kay Charm Crossbody bag"
              className={classes.image}
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt={56}>
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
        </SimpleGrid>
      </Container>
    </section>
  )
}
