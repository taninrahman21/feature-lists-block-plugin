import { useEffect, useState } from 'react';
import FeatureListsBack from './Components/Backend/FeatureListsBack/FeatureListsBack';
import Settings from './Components/Backend/Settings/Settings';


const Edit = props => {
	const { setAttributes, clientId, attributes } = props;
	const [activeFeature, setActiveFeature] = useState(0);
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]);



	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} activeFeature={activeFeature} />
			<FeatureListsBack attributes={attributes} setAttributes={setAttributes} setActiveFeature={setActiveFeature} />
		</>
	)
};

export default Edit;