import { Button, Container, Group, Text, TextInput, Title } from '@mantine/core'
import classes from './EmailCaptureSection.module.css'

export function EmailCaptureSection() {
  return (
    <section className={classes.root} id="join">
      <Container size="md" className={classes.container}>
        <Title order={2} className={classes.heading}>
          Be first to access the drop.
        </Title>
        <Text className={classes.subheading}>
          New bags. New charms. Early access before the public launch.
        </Text>

        <Group className={classes.row} mt="lg" gap="sm">
          <TextInput
            placeholder="Email address"
            radius={0}
            className={classes.input}
            aria-label="Email address"
          />
          <Button radius={0} className={classes.button}>
            Join the List
          </Button>
        </Group>
      </Container>
    </section>
  )
}
