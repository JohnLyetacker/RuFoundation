import * as React from 'react';
import UserView from '../util/user-view';
import formatDate from '../util/date-format';
import { ForumPostPreviewData } from './forum-post-editor';
import {UserData} from '../api/user'


interface Props {
    preview: ForumPostPreviewData
    user: UserData
    isThread?: boolean
}


const ForumPostPreview: React.FC<Props> = ({ preview, user, isThread }) => {
    const previewDate = new Date();
    return (
        <>
            { isThread && <h2>Предпросмотр:</h2> }
            <div className="forum-thread-box">
                { isThread && <div className="description-block well">
                    { preview.description && <div className="head">Краткое описание:</div> }
                    { preview.description }
                    <div className="statistics">
                        Создатель: <UserView data={user} avatarHover />
                        <br/>
                        Дата: {formatDate(previewDate)}
                    </div>
                </div> }
                <div id="thread-container" className="thread-container">
                    <div id="thread-container-posts">
                        <div className="post-container">
                            { !isThread && <h2>Предпросмотр ответа:</h2> }
                            <div className="post">
                                <div className="long">
                                    <div className="head">
                                        <div className="title">
                                            { preview.name }
                                        </div>
                                        <div className="info">
                                            <UserView data={user} avatarHover />
                                            {' '}
                                            <span className="odate" style={{ display: 'inline' }}>{formatDate(previewDate)}</span>
                                        </div>
                                    </div>
                                    <div className="content" dangerouslySetInnerHTML={{ __html: preview.content }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForumPostPreview