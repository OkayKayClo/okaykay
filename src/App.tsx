import { ActionIcon, Anchor, Box, Container, Group, Text } from '@mantine/core'
import { IconShoppingBag } from '@tabler/icons-react'
import { CharmCollectionHero } from './CharmCollectionHero'
import { OkayCharmsStrip } from './OkayCharmsStrip'
import { BuildYourBagSection } from './BuildYourBagSection'
import { BaseCollectionSection } from './BaseCollectionSection'
import { StyleYourBagSection } from './StyleYourBagSection'
import { CharmCloseupSection } from './CharmCloseupSection'
import { LifestyleStripSection } from './LifestyleStripSection'
import { EmailCaptureSection } from './EmailCaptureSection'
import './App.css'

function App() {
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

      <OkayCharmsStrip />

      <Container size="lg" className="mainContent">
        <section className="colorBanner">
          <Text className="bannerTitle">For every shade. Every city. Every story.</Text>
          <Text className="bannerSub">One culture. One vision.</Text>
        </section>
      </Container>
      <BuildYourBagSection />
      <BaseCollectionSection />
      <StyleYourBagSection />
      <CharmCloseupSection />
      <LifestyleStripSection />
      <EmailCaptureSection />
    </Box>
  )
}

export default App


