import { useRouter } from 'next/router'
import { HiOutlineTranslate } from 'react-icons/hi'
import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

const TranslationButton = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLocale = router.locale
  const activeColor = useColorModeValue('gray.200', 'gray.600')
  const hoverColor = useColorModeValue('gray.100', 'gray.500')


  const handleLanguageChange = locale => {
    router.push(router.pathname, router.asPath, { locale })
  }
  const languages = [
    { lang: 'fr', label: t('label_french') },
    { lang: 'en', label: t('label_english') },
    { lang: 'de', label: t('label_german') },
    { lang: 'es', label: t('label_spanish') },
    { lang: 'it', label: t('label_italian') },
    { lang: 'ru', label: t('label_russian') },
    { lang: 'jp', label: t('label_japanese') },
    { lang: 'pt', label: t('label_portuguese') }
  ]

  return (
    <Box mr={2} display={{ base: 'inline-block' }}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HiOutlineTranslate />}
          variant="outline"
          aria-label="Options"
        />
        <MenuList>
          {languages.map(language => (
            <MenuItem
              key={language.lang}
              onClick={() => handleLanguageChange(language.lang)}
              bg={language.lang === currentLocale ? activeColor : 'inherit'}
              _hover={{ bg: hoverColor }}
            >
              {language.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default TranslationButton
