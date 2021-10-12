import { makeStyles } from '@mui/styles';

export default makeStyles (() => ({
    container: {
        justifyContent: 'space-between',
        justifyItems: 'flex',
        position: 'relative',
    },
    buttonContainer: {
        marginTop: '0px',
        marginLeft: '50px',
        width: '200px',
        height: '60px',
    },
    buttonCreateContainer: {
        marginTop: '20px',
        width: '150px',
        height: '30px',
        justifyContent: 'space-between',
    },
    button: {
        width: '100%',
        height: '100%',
        color: 'black',
    },
    insertTextField: {
        marginTop: '-60px',
        position: 'relative',
        marginLeft: '350px',
        width: '200px',
    },
    searchTextField: {
        marginTop: '-56px',
        position: 'relative',
        marginLeft: '700px',
        width: '600px',
    },
    meetingContainer: {
        border: '1px solid',
    }
}))
