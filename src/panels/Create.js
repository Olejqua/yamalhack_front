import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import { eventVariable } from '../static/dictionaries';

const osName = platform();

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      purpose: ''
    }
  }

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  render() {
    const { purpose } = this.state;

    return (
      <Panel id={this.props.id}>
        <PanelHeader
            left={<HeaderButton onClick={this.props.go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
          </HeaderButton>}
        >
          Регистрация мероприятия
        </PanelHeader>
        <FormLayout>
          <Input top="Организатор" />
          <Select
            top="Тип мероприятия"
            placeholder="Выберите тип мероприятия"
            status={purpose ? 'valid' : 'error'}
            bottom={purpose ? '' : 'Пожалуйста, укажите тип мероприятия'}
            onChange={this.onChange}
            value={purpose}
            name="purpose"
          >
            {eventVariable.map((category, idx) => (
              <option
              value={idx}
              >
                {category}
              </option>
            ))}
          </Select>
          <Input top="Название мероприятия" />
          <Textarea top="Описание" />
          <Input top="Место проведения" />
          <Button size="xl">Зарегистрировать</Button>
        </FormLayout>
      </Panel>
    );
  }
}

export default Create
