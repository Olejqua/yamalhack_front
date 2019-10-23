import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import { eventVariable } from '../static/dictionaries';


const Home = ({ id, go, fetchedUser }) => {
	
	return (
		<Panel id={id}>
			<PanelHeader>
				Меро
			</PanelHeader>

			{fetchedUser &&
			<Group title="Аккаунт">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
				<List>
          <Cell>
            <InfoRow title="Ближайшие мероприятия">
              Хакатон на полярном круге
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Участвовал в">
              7 мероприятиях
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Организовал">
              3 мероприятия
            </InfoRow>
          </Cell>
        </List>
			</Group>}
	
			<Group>
				<Div>
					<Button size="xl" level="2" onClick={go} data-to="events">
						Поиск мероприятий
					</Button>
				</Div>
				<Div>
					<Button size="xl" level="2" onClick={go} data-to="create">
						Создать мероприятие
					</Button>
				</Div>
			</Group>
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
