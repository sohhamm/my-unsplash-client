import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

declare interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewPhotoModal({isOpen, onClose}: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Label</FormLabel>
            <Input
              variant="outline"
              placeholder="This is a nice picture"
              focusBorderColor="brand.400"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Photo URL</FormLabel>
            <Input
              variant="outline"
              placeholder="https://picsum.photos/300/600"
              focusBorderColor="brand.400"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={4}>
            Close
          </Button>
          <Button bg="#3DB46D" color="white" mr={3} onClick={onClose}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
