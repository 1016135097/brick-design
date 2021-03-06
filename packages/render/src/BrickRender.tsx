import React, {
	memo,
	useMemo,
} from 'react';

import {
	StaticContextProvider,
} from '@brickd/hooks';
import {get} from 'lodash';
import StateDomainWarpper from './warppers/StateDomainWarpper';

interface BrickRenderProps  {
	componentsMap:any,
	pageConfig?:any,
	options?:any
	[propName:string]:any
}


function BrickRender(brickdProps: BrickRenderProps) {
	const ROOT_KEY='0';
	const {componentsMap,pageConfig,options,...props} = brickdProps;
	const staticState=useMemo(()=>({pageConfig,componentsMap,options}),[pageConfig,componentsMap,options]);
	const rootComponent=get(pageConfig,ROOT_KEY);
	if(!rootComponent) return null;
	return (
		<StaticContextProvider value={staticState}>
		<StateDomainWarpper {...props} renderKey={ROOT_KEY}/>
		</StaticContextProvider>
				);
}

export default memo(BrickRender);
