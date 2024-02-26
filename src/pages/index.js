// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
import Gallery from './qcomps/state'
import Rrofile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import Profile from './components/profile_props'
import Holder from './components/square'
import PackingList from './components/props_item'
import List from './qcomps/artistsRemoveArr'
import RecipeList from './qcomps/recipes'
import PersonData from './components/stateObj'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/queueUpdates'
import Form from './components/updObjects'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import Button from './components/button'
import BucketList from './qcomps/arrObj'

export default function Home() {
  return (
    <div className={styles.main}>
      <BucketList/>

    </div>
  )
}
