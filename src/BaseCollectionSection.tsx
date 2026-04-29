import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core'
import classes from './BaseCollectionSection.module.css'

const bags = [
  {
    name: 'Charm Crossbody',
    desc: 'Compact everyday silhouette.',
    img: '/bags/charm-crossbody.png',
  },
  { name: 'Mini Charm Tote', desc: 'Structured with soft polish.', img: '/bags/mini-tote.png' },
  { name: 'Charm Hobo', desc: 'Relaxed drape. Elevated finish.', img: '/bags/charm-hobo.png' },
  { name: 'Bucket Charm Bag', desc: 'Statement bucket, refined hardware.', img: '/bags/bucket-bag.png' },
]

export function BaseCollectionSection() {
  return (
    <section className={classes.root}>
      <Container size="xl" className={classes.container}>
        <Title order={2} className={classes.heading}>
          Base Collection
        </Title>
        <Text className={classes.subheading}>Start with the shape that fits your style.</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mt="lg">
          {bags.map((bag) => (
            <Box key={bag.name} className={classes.card}>
              <img src={bag.img} alt={bag.name} className={classes.image} />
              <Text className={classes.name}>{bag.name}</Text>
              <Text className={classes.desc}>{bag.desc}</Text>
              <Text className={classes.badge}>Coming Soon</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  )
}
