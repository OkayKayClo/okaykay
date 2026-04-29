import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core'
import classes from './BuildYourBagSection.module.css'

const steps = [
  { id: '01', title: 'Choose Your Bag' },
  { id: '02', title: 'Add Your Charms' },
  { id: '03', title: 'Make It Yours' },
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

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt="xl">
          {steps.map((step) => (
            <Box key={step.id} className={classes.stepCard}>
              <Text className={classes.stepId}>{step.id}</Text>
              <Text className={classes.stepTitle}>{step.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  )
}
