import {
  Container,
  Heading,
  Divider,
  Link,
  ListItem,
  ListIcon,
  List
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear, OpeningTitle } from '../components/bio'
import { MdCheckCircle } from 'react-icons/md'
import useTranslation from 'next-translate/useTranslation'

import Paragraph from '../components/paragraph'

const JobExperience = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <Container>
        <Section delay={0.2}>
          <Heading as="h3" fontSize={20} mb={4}>
            {t('job_experience')}
          </Heading>
          <BioSection ml={-4}>
            <BioYear ml={5}>
              <Link href="https://www.buymorefollowers.com/" target="_blank">
                Buy More Followers
              </Link>{' '}
              - {t('experience')}
            </BioYear>
            <Paragraph>{t('accomplishments')}</Paragraph>
            <OpeningTitle>{t('bmf_accomplishment_1')}</OpeningTitle>
            <List spacing={3} ml={50}>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('bmf_accomplishment_2')}
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500"  />
                {t('bmf_accomplishment_3')} 
              </ListItem>
              {/* <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('bmf_accomplishment_3')}
              </ListItem> */}
            </List>
          </BioSection>
        </Section>

        <Divider my={6} />

        <Section delay={0.4}>
          <BioSection ml={-5}>
            <BioYear ml={5}>
              <Link href="https://www.moreirasupermercado.com.br/" target="_blank">
                Moreira Supermercado
              </Link>{' '}
              - {t('experience')}
            </BioYear>
            <Paragraph>{t('accomplishments')}</Paragraph>
            <OpeningTitle>{t('moreira_accomplishment_1')}</OpeningTitle>
            <List spacing={3} ml={50}>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('moreira_accomplishment_2')}
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('moreira_accomplishment_3')}
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('moreira_accomplishment_4')}
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('moreira_accomplishment_5')}
              </ListItem>
            </List>
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default JobExperience
