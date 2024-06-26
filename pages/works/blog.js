import {
  Container,
  Badge,
  List,
  ListItem,
  // useColorModeValue,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
// import Blockquote from '../../components/blockquote'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Work = () => {
  const { t } = useTranslation('works/blog')
  return (
    <Layout title={t('title')}>
      <Container>
        <Title>
          {t('title')} <Badge>{t('date')}</Badge>
        </Title>
        <P>{t('description')}</P>
        {/* <Blockquote style={{ color: useColorModeValue('#444', '#888') }}>
          <p>{t('quote')}</p>
        </Blockquote> */}
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
              href="https://github.com/aaron-wendell/meu-blog"
            >
              {t('githubLink')}
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/blog.jpg" alt={t('imageAlt')} />
      </Container>
    </Layout>
  )
}

export default Work
