import axios from 'axios'
import Configuration from '@/infrastructure/Configuration'
import Fetcher from '@/infrastructure/Fetcher'
import UnsplashService from './UnsplashService'
import UnsplashServiceMapper from './UnsplashServiceMapper'

export const unsplashServiceMapper = new UnsplashServiceMapper()

export const unsplashService = new UnsplashService({
  fetcher: new Fetcher({ httpClient: axios }),
  config: Configuration,
  mapper: unsplashServiceMapper
})
