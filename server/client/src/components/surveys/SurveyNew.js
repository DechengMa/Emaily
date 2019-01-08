import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	state = {
		showFormReview: false
	};

	renderContent() {
		if (this.state.showFormReview === true) {
			return (
				<SurveyFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<SurveyForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}
// When go outsite of the survey form adn review, use the reduxForm default feature, dump all stuff
export default reduxForm({ form: 'surveyForm' })(SurveyNew);
