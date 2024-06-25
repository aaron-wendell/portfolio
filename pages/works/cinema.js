import {
  Container,
  Badge,
  List,
  ListItem,
  Tooltip,
  useColorModeValue,
  Link,
  AspectRatio
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Blockquote from '../../components/blockquote'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Work = () => {
  const { t } = useTranslation('works/cinema')
  return (
    <Layout title={t('title')}>
      <Container>
        <Title>
          {t('title')} <Badge>{t('date')}</Badge>
        </Title>
        <P>{t('description')}</P>
        <Blockquote style={{ color: useColorModeValue('#444', '#888') }}>
          <p>{t('quote')}</p>
        </Blockquote>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t('platform')}</Meta>
            <span>{t('platformValue')}</span>
          </ListItem>
          <ListItem>
            <Meta>{t('stack')}</Meta>
            <span>{t('stackValue')}</span>
          </ListItem>
          <ListItem>
            <Meta>{t('github')}</Meta>
            <Link
              as={NextLink}
              target="_blank"
              href="https://payhip.com/b/qTuJE"
            >
              {t('githubLink')}
            </Link>
            <Tooltip label={t('private')} aria-label="A tooltip">
              <InfoOutlineIcon ml={2} />
            </Tooltip>
          </ListItem>
        </List>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/Ls3S_6IJdyM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Container>
    </Layout>
  )
}
export default Work
