import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import useTranslation from 'next-translate/useTranslation'

import thumbCinema from '../public/images/works/cinema.jpg'
import thumbBlog from '../public/images/works/blog.jpg'
import thumbBmf from '../public/images/works/bmf.png'
import thumbFinances from '../public/images/works/finances.jpg'
import thumbTimer from '../public/images/works/timer.jpg'
import thumbRattata from '../public/images/works/rattata.png'

const Works = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t('works')}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="buy-more-followers" title={t('buy_more_followers')} thumbnail={thumbBmf}>
              {t('buy_more_followers_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="cinema"
              title={t('cinema')}
              thumbnail={thumbCinema}
            >
              {t('cinema_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="finances"
              title={t('finances')}
              thumbnail={thumbFinances}
            >
              {t('finances_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="timer"
              title={t('timer')}
              thumbnail={thumbTimer}
            >
              {t('timer_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="rattata"
              title={t('rattata')}
              thumbnail={thumbRattata}
            >
              {t('rattata_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="blog" title={t('blog')} thumbnail={thumbBlog}>
              {t('blog_description')}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider mt={3} />
      </Container>
    </Layout>
  )
}

export default Works
