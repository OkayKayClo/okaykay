import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core'
import classes from './CharmCloseupSection.module.css'

const charms = [
  ['Signature Logo', '/charms/signature-logo.png'],
  ['Logo Tag', '/charms/logo-tag.png'],
  ['K Initial', '/charms/k-initial.png'],
  ['Heart', '/charms/heart.png'],
  ['Lock', '/charms/lock.png'],
  ['Key', '/charms/key.png'],
  ['Money', '/charms/money.png'],
  ['Leather Tassel', '/charms/leather-tassel.png'],
  ['Mini Pouch', '/charms/mini-pouch.png'],
  ['Chain Extension', '/charms/chain-extension.png'],
] as const

export function CharmCloseupSection() {
  return (
    <section className={classes.root}>
      <Container size="xl" className={classes.container}>
        <Title order={2} className={classes.heading}>
          The First 10 Charms
        </Title>
        <Text className={classes.subheading}>Signature pieces made to mix, match, and collect.</Text>

        <SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing="sm" mt="lg" className={classes.desktopGrid}>
          {charms.map(([name, img]) => (
            <Box key={name} className={classes.tile}>
              <img src={img} alt={name} className={classes.image} />
              <Text className={classes.name}>{name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  )
}
