import React from 'react';

export class EditableInput extends React.Component {
  state = {
    isActive: false,
    value: null,
    originValue: null
  };

  componentDidMount() {
    const { entity, entityField } = this.props;
    const value = entity(entityField);

    this.setState({
      value,
      originValue: value
    });
  }

  disableEdit() {
    this.setState({ disableEdit: false });
  }

  update() {
    this.setState({ disableEdit: true });
  }

  renderComponentView() {
    const { value, isActive } = this.state;
    if (isActive) {
      return (
        <React.Fragment>
          <input onChange={event => this.handleChange(event)} value={value} />
          <button
            onClick={() => this.disableEdit()}
            className="btn btn-warning"
            type="button"
          >
            Close
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <p>{value}</p>
        <button
          onClick={() => this.update()}
          className="btn btn-warning"
          type="button"
        >
          Edit
        </button>
      </React.Fragment>
    );
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return <div>{this.renderComponentView}</div>;
  }
}
