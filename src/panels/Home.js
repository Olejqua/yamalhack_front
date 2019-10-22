import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Select from '@vkontakte/vkui/dist/components/Select/Select';

import { eventVariable } from '../static/dictionaries';


const Home = ({ id, go, fetchedUser }) => {
	const [activeTab, setActiveTab] = useState('volonture');

	return (
		<Panel id={id}>
			<PanelHeader>
				Меро
			</PanelHeader>
			<FormLayout>
				<Select top="Категория" placeholder="Выберите категорию">
					{eventVariable.map((category, idx) => (
						<option
						value={idx}
						>
							{category}
						</option>
					))}
				</Select>
    	</FormLayout>
			{fetchedUser &&
			<Group title="User Data Fetched with VK Connect">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}
	
			<Group title="Navigation Example">
				<Div>
					<Button size="xl" level="2" onClick={go} data-to="persik">
						Show me the Persik, please
					</Button>
				</Div>
				<Div>
					<Button size="xl" level="2" onClick={go} data-to="create">
						Create event
					</Button>
				</Div>
			</Group>
			<FixedLayout vertical="bottom">
				<Tabs>
					<TabsItem
						onClick={() => setActiveTab('volonture')}
						selected={activeTab === 'volonture'}
					>
						Волонтер
					</TabsItem>
					<TabsItem
						onClick={() => setActiveTab('organiser')}
						selected={activeTab === 'organiser'}
					>
						Организатор
					</TabsItem>
				</Tabs>
			</FixedLayout>
		</Panel>
	);
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
