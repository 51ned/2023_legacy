import { Button, Text } from '@/components/generic'


export default function Home() {
  return (
    <>
      <Text withSize='subtitle'>
        Hello, world!
      </Text>

      <Button
        buttonId='button-id'
        controlledEl='card-id'
        isActive={true}
        isExpandable={false}
        withStyle='regular'
      >
        Tab button example
      </Button>
    </>
  )
}