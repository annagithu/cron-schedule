import React, { Component } from 'react';
import HourSection from './HourSection';
import MinuteSelection from './MinuteSelection';
import ChangeButton from './ChangeButton';
import Result from './Result';
import DateSelection from './DateSelection';
import PeriodSection from './PeriodSection';
import SelectionDayOfWeek from './SelectionDayOfWeek';
import SaveToFileButton from './SaveToFileButton';

class CronGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPeriod: 'Custom',
      dayOfWeek: '*',
      day: '*',
      minute: '*',
      hour: '*',
      month: '*',
      year: new Date().getFullYear(),
      isResultVisible: false,
      isPeriodVisible: false,
      isSaveButtonEnable: true,
      resultData: '',
    };
  }
  

  clearResultData = () => {
    let { minute, hour, day, month, dayOfWeek } = this.state;
      if (minute) this.setState({ minute: '*' });
      if (hour) this.setState({ hour: '*' });
      if (day) this.setState({ day: '*' });
      if (month) this.setState({ month: '*' });
      if (dayOfWeek) this.setState({ dayOfWeek: '*' });
  }

  handleChangeButtonClick = () => {
    this.setState((prevState) => ({
      isResultVisible: !prevState.isResultVisible,
    }));
    let{isResultVisible} = this.state;
    if (isResultVisible) {this.setState({isPeriodVisible: false})}
    else {this.setState({isPeriodVisible: true})}
  };

  handleResultChange = (e) => {

    const value = e.target.value;

    const regex = /^(?:(\*|[0-5]?[0-9]) (\*|[01]?[0-9]|2[0-3]) (\*|[0-2]?[0-9]|3[01]) (\*|0?[1-9]|1[0-2]) (\*|MON|TUE|WED|THU|FRI|SAT|SUN))?$/
    var inputResult = document.getElementById("input")
    if (regex.test(value) && value) {
      inputResult.style.color = 'green';
      this.setState({ isSaveButtonEnable: true })
    }
    else {
      inputResult.style.color = 'red';
      this.setState({ isSaveButtonEnable: false })
    }

    this.setState({ resultData: value });

    const [minute, hour, day, month, dayOfWeek] = value.split(' ');

    if (minute) this.setState({ minute });
    if (hour) this.setState({ hour });
    if (day) this.setState({ day });
    if (month) this.setState({ month });
    if (dayOfWeek) this.setState({ dayOfWeek });
  };

  handleDateChange = (date) => {
    this.setState({ day: date });

    const dayObj = new Date(date);
    const day = dayObj.getDate();
    const month = dayObj.getMonth() + 1;
    this.setState({ day: day, month: month });
  };

  getResultData = () => {
    let { minute, hour, day, month, dayOfWeek, selectedPeriod } = this.state;
    if (selectedPeriod == "Monthly") { dayOfWeek = "*"; day = "*" }
    if (selectedPeriod == "Daily") { month = "*"; dayOfWeek = "*" }
    if (selectedPeriod == "Weekly") { month = "*"; day = "*" }

    return `${minute} ${hour} ${day} ${month} ${dayOfWeek}`;
  };

  render() {
    const { selectedPeriod, dayOfWeek, minute, hour, month, isResultVisible, resultData, year, day, isSaveButtonEnable, isPeriodVisible } = this.state;

    return (
      <div>
        <PeriodSection selectedPeriod={selectedPeriod} isVisible = {isPeriodVisible} setSelectedPeriod={(period) => this.setState({ selectedPeriod: period })} />
        {(selectedPeriod === 'Daily' || selectedPeriod === 'Monthly') && (
          <>
            <DateSelection date={`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`} setDate={this.handleDateChange} />
            <MinuteSelection minute={minute} setMinute={(min) => this.setState({ minute: min })} />
            <HourSection hour={hour} setHour={(h) => this.setState({ hour: h })} />
          </>
        )}

        {selectedPeriod === 'Weekly' && (
          <>
            <SelectionDayOfWeek dayOfWeek={dayOfWeek} setdayOfWeek={(day) => this.setState({ dayOfWeek: day })} />
            <MinuteSelection minute={minute} setMinute={(min) => this.setState({ minute: min })} />
            <HourSection hour={hour} setHour={(h) => this.setState({ hour: h })} />
          </>
        )}
        {selectedPeriod === 'Custom' && (
          <>
            <SelectionDayOfWeek isVisible={isResultVisible} dayOfWeek={dayOfWeek} setdayOfWeek={(day) => this.setState({ dayOfWeek: day })} />
            <DateSelection isVisible={isResultVisible} date={`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`} setDate={this.handleDateChange} />
            <MinuteSelection isVisible={isResultVisible} minute={minute} setMinute={(min) => this.setState({ minute: min })} />
            <HourSection isVisible={isResultVisible} hour={hour} setHour={(h) => this.setState({ hour: h })} />
          </>
        )}
        <ChangeButton onClick={this.handleChangeButtonClick} />
        <Result
          isVisible={isResultVisible}
          data={isResultVisible ? resultData  : this.getResultData()}
          onChange={this.handleResultChange}
        />
        <SaveToFileButton visible={isSaveButtonEnable} />
      </div>
    );
  }
}

export default CronGenerator;
