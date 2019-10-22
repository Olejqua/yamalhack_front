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

const osName = platform();

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      purpose: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
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
            <option value="0">Хакатон</option>
            <option value="1">Социально-психологическая поддержка</option>
            <option value="2">Профилактика здорового и безопасного образа жизни</option>
            <option value="3">Педагогическое сопровождение</option>
            <option value="4">Социальное патронирование детских домов</option>
            <option value="5">Досуговая деятельность</option>
            <option value="6">Экологическая защита</option>
            <option value="7">Интеллектуальное развитие</option>
            <option value="8">Творческое развитие</option>
            <option value="9">Информационное обеспечение</option>
            <option value="10">Медицинская помощь</option>
            <option value="11">Спортивная, туристическая и военная подготовка</option>
            <option value="12">Социальное патронирование пожилых людей</option>
            <option value="13">Реставрационная деятельность</option>
            <option value="14">Экскурсионно-паломническая деятельность</option>
            <option value="15">Трудовая помощь</option>
            <option value="16">Ремесленные мастерские</option>
            <option value="17">Социальное краеведение</option>
            <option value="18">Муниципальное управление</option>
            <option value="19">Участие в выполнении специальных работ</option>
            <option value="20">Иные виды работ</option>
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
