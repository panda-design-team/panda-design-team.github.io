import {Typography} from 'antd';
import {useState} from 'react';
import {Button, Modal} from '@panda-design/components';
import {Grid} from '@/components/Grid';

const ModalWithButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                打开 Modal
            </Button>
            <Modal
                title="标题位置"
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
            >
                内容区
            </Modal>
        </>
    );
};

export const ModalGrids = () => {
    return (
        <>
            <Typography.Title>Modal 对话框</Typography.Title>
            <Grid repeat={2}>
                <ModalWithButton />
                <Button
                    type="primary"
                    onClick={() => Modal.confirm({title: '标题位置', content: '内容区'})}
                >
                    打开 Modal Confirm
                </Button>
            </Grid>
        </>
    );
};
