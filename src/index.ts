import { NavMenu } from './components/NavMenu'
import './reset.css'
import './index.css'
import { Router } from './core/router'
import { Component } from './core/component'
import { HomePage } from './pages/home/HomePage'
import { FnqPage } from './pages/fnq/FnqPage'

const routerMap: Record<string, typeof Component> = {
  '/': HomePage,
  '/fnq': FnqPage,
}

const $root = document.getElementById('root') as HTMLElement

new NavMenu({ $parent: $root })

new Router({ routes: routerMap })
