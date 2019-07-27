import React from 'react';

export class EditableInput extends React.Component {
  state = {
    isActive: false,
    value: null,
    originValue: null
  };

  componentDidMount() {
    const { entity, entityField } = this.props;
    const value = entity[entityField];

    this.setState({
      value,
      originValue: value
    });
  }

  disableEdit() {
    this.setState({ isActive: false });
  }

  enableEdit() {
    this.setState({ isActive: true });
  }

  update() {
    const { value, originValue } = this.state;
    const { updateEntity, entityField } = this.props;
    if (value !== originValue) {
      updateEntity({ [entityField]: value });
      this.setState({ isActive: false, originValue: value });
    }
  }

  renderComponentView() {
    const { value, isActive } = this.state;
    const { className } = this.props;

    if (isActive) {
      return (
        <React.Fragment>
          <input
            onChange={event => this.handleChange(event)}
            value={value}
            className={className}
          />
          <button
            onClick={() => this.update()}
            className="btn btn-success btn-editable"
            type="button"
          >
            Save
          </button>
          <button
            onClick={() => this.disableEdit()}
            className="btn btn-warning btn-editable"
            type="button"
          >
            Close
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <span className={className}>{value}</span>
        <button
          onClick={() => this.enableEdit()}
          className="btn btn-warning btn-editable"
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
    return (
      <div className="editableComponent" style={this.props.containerStyle}>
        {this.renderComponentView()}
      </div>
    );
  }
}
