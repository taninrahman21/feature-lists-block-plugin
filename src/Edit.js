import { useEffect } from 'react';
import BFeatureLists from './Components/BFeatureLists/BFeatureLists';
import Settings from './Components/Backend/Settings/Settings';
const Edit = props => {
	const { setAttributes, clientId, attributes } = props;
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} />
			<BFeatureLists attributes={attributes} setAttributes={setAttributes} />
		</>
	)
};
export default Edit;