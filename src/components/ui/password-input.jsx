import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Stack,
  mergeRefs,
  useControllableState,
} from '@chakra-ui/react'

import { forwardRef, useRef } from 'preact/compat'
import { LuEye, LuEyeOff } from 'react-icons/lu'

export function passwordStrength(password, options) {
  let diversity = 0
  if (/[a-z]/.test(password)) diversity++
  if (/[A-Z]/.test(password)) diversity++
  if (/[0-9]/.test(password)) diversity++
  if (/[^A-Za-z0-9]/.test(password)) diversity++
  for (let i = options.length - 1; i >= 0; i--) {
    const option = options[i]
    if (password.length >= option.minLength && diversity >= option.minDiversity) {
      return option
    }
  }
  return options[0]
}

export const PasswordInput = forwardRef(function PasswordInput(props, ref) {
  const {
    // @ts-ignore
    rootProps,
    // @ts-ignore
    defaultVisible,
    // @ts-ignore
    visible: visibleProp,
    // @ts-ignore
    onVisibleChange,
    // @ts-ignore
    visibilityIcon = { on: <LuEye />, off: <LuEyeOff /> },
    ...rest
  } = props

  const [visible, setVisible] = useControllableState({
    value: visibleProp,
    defaultValue: defaultVisible || false,
    onChange: onVisibleChange,
  })

  const inputRef = useRef(null)

  return (
    <InputGroup
      endElement={
        <VisibilityTrigger
          // @ts-ignore
          disabled={rest.disabled}
          onPointerDown={(e) => {
            // @ts-ignore
            if (rest.disabled) return
            if (e.button !== 0) return
            e.preventDefault()
            setVisible(!visible)
          }}
        >
          {visible ? visibilityIcon.off : visibilityIcon.on}
        </VisibilityTrigger>
      }
      {...rootProps}
    >
      <Input
        {...rest}
        ref={mergeRefs(ref, inputRef)}
        type={visible ? 'text' : 'password'}
      />
    </InputGroup>
  )
})

const VisibilityTrigger = forwardRef(function VisibilityTrigger(props, ref) {
  return (
    <IconButton
      tabIndex={-1}
      ref={ref}
      me='-2'
      aspectRatio='square'
      size='sm'
      variant='ghost'
      height='calc(100% - {spacing.2})'
      aria-label='Toggle password visibility'
      {...props}
    />
  )
})

export const PasswordStrengthMeter = forwardRef(function PasswordStrengthMeter(
  props,
  ref,
) {
  // @ts-ignore
  const { max = 4, value, ...rest } = props

  const percent = (value / max) * 100
  const { label, colorPalette } = getColorPalette(percent)

  return (
    <Stack align='flex-end' gap='1' ref={ref} {...rest}>
      <HStack width='full' {...rest}>
        {Array.from({ length: max }).map((_, index) => (
          <Box
            key={index}
            height='1'
            flex='1'
            data-selected={index < value ? '' : undefined}
            layerStyle='fill.subtle'
            colorPalette='orange'
            _selected={{
              colorPalette,
              layerStyle: 'fill.solid',
            }}
          />
        ))}
      </HStack>
      {label && <HStack textStyle='xs'>{label}</HStack>}
    </Stack>
  )
})

function getColorPalette(percent) {
  switch (true) {
    case percent < 33:
      return { label: 'Low', colorPalette: 'red' }
    case percent < 66:
      return { label: 'Medium', colorPalette: 'orange' }
    default:
      return { label: 'High', colorPalette: 'green' }
  }
}
