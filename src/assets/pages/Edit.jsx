import {useParams} from 'react-router-dom';

const Edit = ()=>{
    const params = useParams();
    return <div>
        {params.id} edit
    </div>
}

export default Edit;