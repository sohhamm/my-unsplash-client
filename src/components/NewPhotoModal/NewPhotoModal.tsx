import * as React from 'react'
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
import {addPhoto} from '../../data/add-photo'

declare interface ModalProps {
  isOpen: boolean
  onClose: () => void
  setShouldRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NewPhotoModal({
  isOpen,
  onClose,
  setShouldRefresh,
}: ModalProps) {
  const [label, setLabel] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleAddPhoto = async () => {
    const payload = {
      label,
      url,
    }
    const data = await addPhoto(payload, setIsSubmitting)
    console.log({data})
    if (data) {
      setLabel('')
      setUrl('')
      onClose()
      setShouldRefresh(true)
    }
  }
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
              value={label}
              onChange={e => setLabel(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Photo URL</FormLabel>
            <Input
              variant="outline"
              placeholder="https://picsum.photos/400/600"
              focusBorderColor="brand.400"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={4} onClick={onClose}>
            Close
          </Button>
          <Button
            bg="#3DB46D"
            color="white"
            mr={3}
            onClick={handleAddPhoto}
            disabled={!url.length || !label.length}
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
