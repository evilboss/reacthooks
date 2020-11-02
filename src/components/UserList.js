import React from 'react';
import {Query} from 'react-fetching-library';

import {fetchUsersList} from '../api/actions/fetchUsersList';

export const UserList = () => {
    return (
        <Query action={fetchUsersList}>
            {({loading, error, payload, query}) => (
                <div>
                    {loading.toString()}
                    {loading ? 'still' : <div>{JSON.stringify(payload)}</div>}
                </div>
            )}
        </Query>
    )
}
