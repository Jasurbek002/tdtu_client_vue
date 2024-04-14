export default [
	{
		path: '/brm',
		name: 'brm',
		component: () => import('@/pages/brm/Index.vue'),
	},
	{
		path: '/brm/list/:id',
		name: 'list',
		component: () => import('@/components/Ui/brm/Brm.vue'),
	},
	{
		path: '/brm/action',
		name: 'action',
		component: () => import('@/pages/brm/Action.vue'),
	},
	{
		path: '/brm/action/view/:id',
		name: 'climate',
		component: () => import('@/components/Ui/climate/Climate.vue'),
	},
	{
		path: '/brm/policie',
		name: 'policie',
		component: () => import('@/pages/brm/Policie.vue'),
	},

	{
		path: '/brm/policie/view/:id',
		name: 'view',
		component: () => import('@/components/Ui/climate/Climate.vue'),
	},
	{
		path: '/brm/global',
		name: 'global',
		component: () => import('@/pages/brm/globalActions.vue'),
	},
	{
		path: '/brm/global/view/:id',
		name: 'global_view',
		component: () => import('@/pages/brm/details/globalView.vue'),
	},
];
