import {
  ActionIcon,
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconBrandInstagram, IconMail, IconShoppingBag } from '@tabler/icons-react'
import { CharmCollectionHero } from './CharmCollectionHero'
import './App.css'

function App() {
  const collectionCards = [
    {
      title: 'Clean Essentials',
      copy: 'Timeless pieces. Everyday wear.',
      image:
        '/clean-essentials.png',
    },
    {
      title: 'Statement Fits',
      copy: 'Bold looks. Loud confidence.',
      image:
        '/statement-fits.png',
    },
    {
      title: 'Everyday Heat',
      copy: 'Effortless style. Always on.',
      image: '/everyday-heat.png',
    },
  ]

  return (
    <Box className="page">
      <Box className="announcement">
        <Text ta="center" fw={500} size="sm" c="white">
          FIRST DROP COMING SOON -{' '}
          <Text span c="#ff8a2a" fw={700}>
            JOIN THE LIST
          </Text>{' '}
          TO BE FIRST
        </Text>
      </Box>

      <header className="header">
        <Container size="lg" className="headerGrid">
          <Group gap={24} className="leftNav">
            <Anchor href="#" className="navLink">
              New Drop
            </Anchor>
            <Anchor href="#looks" className="navLink">
              Looks
            </Anchor>
            <Anchor href="#about" className="navLink">
              About
            </Anchor>
          </Group>

          <Anchor href="#" className="logoWrap">
            <img src="/okay-kay-logo.png" alt="OKAY KAY logo" className="logoImage" />
          </Anchor>

          <Group gap={16} justify="flex-end" className="rightNav">
            <Anchor href="#join" className="navLink">
              Join
            </Anchor>
            <Group gap={2} wrap="nowrap" align="center">
              <ActionIcon variant="transparent" color="dark" aria-label="Shopping bag, 0 items">
                <IconShoppingBag size={18} stroke={1.7} />
              </ActionIcon>
              <Text size="xs" c="dimmed" ff="monospace">
                0
              </Text>
            </Group>
          </Group>
        </Container>
      </header>

      <CharmCollectionHero />

      <Container size="lg" className="mainContent">
        <section className="colorBanner">
          <Text className="bannerTitle">For every shade. Every city. Every story.</Text>
          <Text className="bannerSub">One culture. One vision.</Text>
        </section>

        <section id="looks" className="collections">
          <Group justify="space-between" className="sectionIntro">
            <Text fw={700} tt="uppercase" size="xs">
              Shop the vision
            </Text>
            <Text size="sm" c="dimmed">
              Three collections. Endless expression.
            </Text>
          </Group>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
            {collectionCards.map((item) => (
              <BackgroundImage src={item.image} key={item.title} radius={0} className="lookCard">
                <Box className="lookOverlay">
                  <Title order={3} className="lookTitle">
                    {item.title}
                  </Title>
                  <Text size="sm">{item.copy}</Text>
                </Box>
              </BackgroundImage>
            ))}
          </SimpleGrid>
        </section>

        <section id="join" className="emailCapture">
          <Stack align="center" gap={8}>
            <Title order={2} className="emailTitle">
              Be first in line.
            </Title>
            <Text c="dimmed">New drops. Early access. Exclusive offers.</Text>
            <Group mt={14} className="emailRow" gap={10}>
              <TextInput placeholder="Enter your email" radius={0} size="md" className="emailInput" />
              <Button radius={0} size="md" className="joinButton">
                Join the List
              </Button>
            </Group>
          </Stack>
        </section>
      </Container>

      <footer className="footer" id="about">
        <Stack align="center" gap={8}>
          <Text className="footerLogo">OKAY KAY</Text>
          <Text c="#d7d7d7">Urban luxury. Clean confidence.</Text>
          <Group gap={10}>
            <ActionIcon variant="subtle" color="gray" aria-label="instagram">
              <IconBrandInstagram size={17} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" aria-label="email">
              <IconMail size={17} />
            </ActionIcon>
          </Group>
          <Text size="xs" c="#b6b6b6" mt={6}>
            © 2024 OKAY KAY. All rights reserved.
          </Text>
        </Stack>
      </footer>
    </Box>
  )
}

export default App


