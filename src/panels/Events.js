import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import UsersStack from '@vkontakte/vkui/dist/components/UsersStack/UsersStack';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { eventVariable } from '../static/dictionaries';

const osName = platform();

const Event = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Каталог мероприятий
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
			<Group>
			<Div>Хакатон на Полярном круге</Div>
      <Div>
        <div style={{
          background: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%), url(https://sun9-36.userapi.com/c851216/v851216142/16b121/9sTXPkPvrHI.jpg) center center no-repeat',
          height: 200,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '6px',
					borderRadius: 12,
					backgroundSize: 'contain',
					backgroundBlendMode: 'multiply'
        }}>
          <UsersStack
            photos={[
              'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
              'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
              'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
            ]}
            style={{ color: "#fff" }}
          >Зарегистрировалось 100 человек</UsersStack>
        </div>
      </Div>
    </Group>
		<Group>
			<Div>Благотворительный детский утренник</Div>
      <Div>
        <div style={{
          background: 'url(https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) center center no-repeat',
          height: 200,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '6px',
					borderRadius: 12,
					backgroundSize: 'cover',
        }}>
          <UsersStack
            photos={[
              'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
              'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
              'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
            ]}
            style={{ color: "#fff" }}
          >Зарегистрировалось 100 человек</UsersStack>
        </div>
      </Div>
    </Group>
		<Group>
			<Div>Сбор еды в приют домашних питомцев</Div>
      <Div>
        <div style={{
          background: 'url(https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80)',
          height: 200,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '6px',
					borderRadius: 12,
					backgroundSize: 'cover',
        }}>
          <UsersStack
            photos={[
              'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
              'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
              'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
            ]}
            style={{ color: "#fff" }}
          >Зарегистрировалось 100 человек</UsersStack>
        </div>
      </Div>
    </Group>
	</Panel>
);


export default Event;
