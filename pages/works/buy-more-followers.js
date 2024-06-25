import { Container, Badge, List, ListItem, Link, Tooltip } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Work = () => {
  const { t } = useTranslation('works/bmf')

  return (
    <Layout title="Buy More Followers">
      <Container>
        <Title>
          {t('title')} <Badge>{t('date')}</Badge>
        </Title>
        <P>{t('description')}</P>
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
              href="https://www.buymorefollowers.com"
            >
              {t('githubLink')}
            </Link>
            <Tooltip label={t('private')} aria-label="A tooltip">
              <InfoOutlineIcon ml={2} />
            </Tooltip>
          </ListItem>
        </List>
        <WorkImage src="/images/works/bmf.png" alt={t('imageAlt')} />
      </Container>
    </Layout>
  )
}

export default Work
