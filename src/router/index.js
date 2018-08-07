import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import User from '@/components/User'
import Active from '@/components/Active'
import Zplist from '@/components/Zplist'
import Addinfo from '@/components/Addinfo'
import Complete from '@/components/Complete'
import Admin from '@/components/Admin'
import Positionlist from '@/components/Positionlist'
import Positiondetails from '@/components/Positiondetails'
import Senddetails from '@/components/Senddetails'

import Details from '@/components/Details'
import Details2 from '@/components/Details2'
import Details3 from '@/components/Details3'
import Details4 from '@/components/Details4'
import Details5 from '@/components/Details5'
import Details6 from '@/components/Details6'
import Details7 from '@/components/Details7'
import Details8 from '@/components/Details8'
import Details9 from '@/components/Details9'
import Details10 from '@/components/Details10'
import Details11 from '@/components/Details11'
import Details12 from '@/components/Details12'
import Details13 from '@/components/Details13'
import Details14 from '@/components/Details14'
import Details15 from '@/components/Details15'
import Details16 from '@/components/Details16'
import Details17 from '@/components/Details17'
import Details18 from '@/components/Details18'
import Details19 from '@/components/Details19'
import Details20 from '@/components/Details20'
import Details21 from '@/components/Details21'
import Details22 from '@/components/Details22'
import Details23 from '@/components/Details23'
import Details24 from '@/components/Details24'
import Details25 from '@/components/Details25'
import Details26 from '@/components/Details26'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
    	path: '/user',
    	name: 'user',
    	component: User
    },
    {
    	path: '/active',
    	name: 'active',
    	component: Active
    },
    {
    	path: '/zplist',
    	name: 'zplist',
    	component: Zplist
    },
    {
    	path: '/details1',
    	name: 'details1',
    	component: Details
    },
    {
    	path: '/details2',
    	name: 'details2',
    	component: Details2
    },
    {
    	path: '/details3',
    	name: 'details3',
    	component: Details3
    },
    {
    	path: '/details4',
    	name: 'details4',
    	component: Details4
    },
    {
    	path: '/details5',
    	name: 'details5',
    	component: Details5
    },
    {
    	path: '/details6',
    	name: 'details6',
    	component: Details6
    },
    {
    	path: '/details7',
    	name: 'details7',
    	component: Details7
    },
    {
    	path: '/details8',
    	name: 'details8',
    	component: Details8
    },
    {
    	path: '/details9',
    	name: 'details9',
    	component: Details9
    },
    {
    	path: '/details10',
    	name: 'details10',
    	component: Details10
    },{
    	path: '/details11',
    	name: 'details11',
    	component: Details11
    },
    {
    	path: '/details12',
    	name: 'details12',
    	component: Details12
    },
    {
    	path: '/details13',
    	name: 'details13',
    	component: Details13
    },
    {
    	path: '/details14',
    	name: 'details14',
    	component: Details14
    },
    {
    	path: '/details15',
    	name: 'details15',
    	component: Details15
    },
    {
    	path: '/details166',
    	name: 'details16',
    	component: Details16
    },
    {
    	path: '/details17',
    	name: 'details17',
    	component: Details17
    },
    {
    	path: '/details18',
    	name: 'details18',
    	component: Details18
    },
    {
    	path: '/details19',
    	name: 'details19',
    	component: Details19
    },
    {
    	path: '/details20',
    	name: 'details20',
    	component: Details20
    },
    {
    	path: '/details21',
    	name: 'details21',
    	component: Details21
    },
    {
    	path: '/details22',
    	name: 'details22',
    	component: Details22
    },
    {
    	path: '/details23',
    	name: 'details23',
    	component: Details23
    },
    {
    	path: '/details24',
    	name: 'details24',
    	component: Details24
    },
    {
    	path: '/details25',
    	name: 'details25',
    	component: Details25
    },{
    	path: '/details26',
    	name: 'details26',
    	component: Details26
    },
    {
    	path: '/addinfo',
    	name: 'addinfo',
    	component: Addinfo
    },
    {
    	path: '/complete',
    	name: 'complete',
    	component: Complete
    },
    {
    	path: '/admin',
    	name: 'admin',
    	component: Admin
    },
    {
    	path: '/positionlist',
    	name: 'positionlist',
    	component: Positionlist,
    },
		{
			path: '/positiondetails',
			name: 'positiondetails',
			component: Positiondetails
		},
		{
			path: '/senddetails',
			name: 'senddetails',
			component: Senddetails
		}	
  ]
})
