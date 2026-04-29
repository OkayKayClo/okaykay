import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core'
import classes from './StyleYourBagSection.module.css'

const styles = [
  { title: 'Minimal Look', copy: 'One signature logo charm.', img: '/style/minimal-look.png' },
  {
    title: 'Everyday Look',
    copy: 'Logo charm, tag charm, and tassel.',
    img: '/style/everyday-look.png',
  },
  {
    title: 'Statement Look',
    copy: 'Chain, initials, heart, lock, and key.',
    img: '/style/statement-look.png',
  },
]

export function StyleYourBagSection() {
  return (
    <section className={classes.root}>
      <Container size="xl" className={classes.container}>
        <Title order={2} className={classes.heading}>
          Style Your Bag
        </Title>
        <Text className={classes.subheading}>One bag. Different energy.</Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" mt="lg">
          {styles.map((item) => (
            <Box key={item.title} className={classes.card}>
              <img src={item.img} alt={item.title} className={classes.image} />
              <div className={classes.overlay}>
                <Text className={classes.cardTitle}>{item.title}</Text>
                <Text className={classes.cardCopy}>{item.copy}</Text>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  )
}
