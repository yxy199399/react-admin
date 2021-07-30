import axios, {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosResponse,
  AxiosError,
} from 'axios'
import { message } from 'antd'
import ULRlIST from './urlList'

type UrlKeys = typeof ULRlIST

// 基本配置
axios.defaults.timeout = 3000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.baseURL = '/api'

const mark = () => {
  message.loading({
    content: '加载中...',
    duration: 0,
    key: 'loading',
    style: {
      width: '100vw',
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.2)',
    },
  })
  const content = document.getElementsByClassName('ant-message')
  const loadingContent = content[0] as HTMLElement
  // 允许该元素成为事件的target
  // loadingContent
  // loadingContent.addEventListener("click", (e: Event) => {
  //   e.stopPropagation()
  // }, true)
  loadingContent.style.pointerEvents = 'auto'
}

// h1是否显示遮罩层

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.method === 'get' || config.method === 'delete') {
    if (config.params?.h1) {
      delete config.params.h1
      mark()
    }
  } else if (config.data?.h1) {
    delete config.data.h1
    mark()
  }
  return config
})

// 响应拦截
axios.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    setTimeout(() => {
      message.destroy('loading')
      if (res.data.code !== 200) {
        res.data.msg && message.error(res.data.msg)
      }
    }, 0)
    return res
  },
  (err: AxiosError) => {
    setTimeout(() => {
      message.destroy('loading')
      message.error('网络错误')
    }, 0)
    return Promise.reject(err)
  }
)

// 配置axios
function initApiConfig<T extends object, K extends keyof T>(
  urlList: T,
  key: K
): T[K] {
  return urlList[key]
}

const Axios = {
  get: (key: keyof UrlKeys, params?: AxiosRequestConfig): AxiosPromise<any> => {
    const url: string = initApiConfig(ULRlIST, key)
    return axios.get(url, params)
  },
  post: (key: keyof UrlKeys, data?: AxiosRequestConfig): AxiosPromise<any> => {
    const url: string = initApiConfig(ULRlIST, key)
    return axios.post(url, data)
  },
}

export default Axios
