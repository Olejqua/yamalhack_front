import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Account = ({ id, go }) => {
  const [fetchedUser, setUser] = useState(null);

  useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);
  return (
    <Panel id={id}>
      <PanelHeader
        left={<HeaderButton onClick={go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </HeaderButton>}
      >
        Аккаунт
      </PanelHeader>
      {fetchedUser &&
        <Group title="User Data Fetched with VK Connect">
          <Cell
            before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
            description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Group>}
	  </Panel>
  )

};


export default Account;
