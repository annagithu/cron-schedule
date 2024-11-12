import React, { Component } from 'react';
import HourSection from './HourSection';
import MinuteSelection from './MinuteSelection';
import ChangeButton from './ChangeButton';
import Result from './Result';
import DateSelection from './DateSelection';
import PeriodSection from './PeriodSection';
import SelectionDayOfWeek from './SelectionDayOfWeek';
import SaveToFileButton from './SaveToFileButton';
import ClearButton from './ClearButton';

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
      isSaveButtonEnable: true,
      isClearButtonVisible: false,
      resultData: '',
    };
  }

  handleChangeButtonClick = () => {
    this.setState((prevState) => ({
      isResultVisible: !prevState.isResultVisible,
    }));
  };

  handleResultChange = (e) => {
    const result = e.target.value;

    const regex = /^(?:(\*|[0-5]?[0-9]) (\*|[01]?[0-9]|2[0-3]) (\*|[0-2]?[0-9]|3[01]) (\*|0?[1-9]|1[0-2]) (\*|MON|TUE|WED|THU|FRI|SAT|SUN))?$/
    var inputResult = document.getElementById("input")
    if (regex.test(result) && result) {
      inputResult.style.color = 'green';
      this.setState({ isSaveButtonEnable: true })
    }
    else {
      inputResult.style.color = 'red';
      this.setState({ isSaveButtonEnable: false })
    }

    this.setState({ resultData: result });

    const [minute, hour, day, month, dayOfWeek] = result.split(' ');

    if (minute) this.setState({ minute });
    if (hour) this.setState({ hour });
    if (day) this.setState({ day });
    if (month) this.setState({ month });
    if (dayOfWeek) this.setState({ dayOfWeek });

    if(result) this.setState({ isClearButtonVisible: true })
  };

  handleDateChange = (date) => {
    this.setState({ day: date });
    const dayObj = new Date(date);
    const day = dayObj.getDate();
    const month = dayObj.getMonth() + 1;
    this.setState({ day: day, month: month });
  };

  handleClearButtonClick = () => {
    let { minute, hour, day, month, dayOfWeek, resultData } = this.state;
    if (minute) this.setState({ minute: '*' });
    if (hour) this.setState({ hour: '*' });
    if (day) this.setState({ day: '*' });
    if (month) this.setState({ month: '*' });
    if (dayOfWeek) this.setState({ dayOfWeek: '*' });
    if (resultData) this.setState({resultData: '* * * * *'})
  }

  validateResultByPeriod = (period) => {
    let { minute, hour, day, month, dayOfWeek } = this.state;
      if (period === "Monthly") { dayOfWeek = "*"; day = "*" }
      if (period === "Daily") { month = "*"; dayOfWeek = "*" }
      if (period === "Weekly") { month = "*"; day = "*" }
      return(`${minute} ${hour} ${day} ${month} ${dayOfWeek}`)
  }

  handlePeriodChange = (period) => {
    this.setState({ selectedPeriod: period });
    const isResultVisible = this.state;
    if(isResultVisible) {this.setState({ resultData: this.validateResultByPeriod(period) })}
  }

  getResultData = () => {
    const {selectedPeriod} = this.state;
    return (this.validateResultByPeriod(selectedPeriod));
  };

  render() {
    const {
      selectedPeriod,
      dayOfWeek,
      minute,
      hour,
      month,
      isResultVisible,
      resultData,
      year,
      day,
      isSaveButtonEnable,
      isClearButtonVisible } = this.state;

    return (
      <div>
        <PeriodSection
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={this.handlePeriodChange}
        />
        {(selectedPeriod === 'Daily' || selectedPeriod === 'Monthly') && (
          <>
            <DateSelection
              isVisible={isResultVisible}
              date={`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`}
              setDate={this.handleDateChange}
            />
          </>
        )}
        {selectedPeriod === 'Weekly' && (
          <>
            <SelectionDayOfWeek
              isVisible={isResultVisible}
              dayOfWeek={dayOfWeek}
              setdayOfWeek={(day) => this.setState({ dayOfWeek: day })}
            />
          </>
        )}
        {selectedPeriod === 'Custom' && (
          <>
            <SelectionDayOfWeek
              isVisible={isResultVisible}
              dayOfWeek={dayOfWeek}
              setdayOfWeek={(day) => this.setState({ dayOfWeek: day })}
            />
            <DateSelection
              isVisible={isResultVisible}
              date={`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`}
              setDate={this.handleDateChange}
            />
          </>
        )}
        <MinuteSelection
          isVisible={isResultVisible}
          minute={minute}
          setMinute={(min) => this.setState({ minute: min })}
        />
        <HourSection
          isVisible={isResultVisible}
          hour={hour}
          setHour={(h) => this.setState({ hour: h })}
        />
        <ChangeButton
          onClick={this.handleChangeButtonClick}
        />
        <Result
          isVisible={isResultVisible}
          data={isResultVisible ? resultData : this.getResultData()}
          onChange={this.handleResultChange}
        />
        <ClearButton isVisible={isClearButtonVisible} onClick={this.handleClearButtonClick} />
        <SaveToFileButton
          isVisible={isSaveButtonEnable}
        />
      </div>
    );
  }
}

export default CronGenerator;
