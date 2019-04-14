import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Bundle, Sighting } from './defs';
import { Button, message, Table as ATable } from 'antd';
import Details from './details/details';

const Styled = styled.div`
  background-color: white;
  padding: 24px;
`;

const fetchList = () =>
  fetch('https://cticonsumer.herokuapp.com/incident/list/', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());



const removeBundle = (e:MouseEvent, id: string) =>  {
  e.stopPropagation();
  fetch(`https://cticonsumer.herokuapp.com/incident/delete/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => message.success('Deleted successfully!'))
    .catch(() => message.error('Error deleting!'))
};

const Table = () => {
  const [data, setData] = useState<Bundle[] | null>(null);
  const [details, setDetails] = useState<Bundle | null>(null);
  useEffect(() => {
    fetchList().then(data => setData(data));
  }, []);

  const columns = useMemo(() => [
    {
      title: 'Created',
      key: 'created',
      render: (text: string, record: Bundle) => {
        const find = record.objects.find(x => x.type === 'sighting');
        if (!find) {
          return <span>n/a</span>;
        }
        return <span>{new Date((find as Sighting).created).toUTCString()}</span>;
      }
    },
    {
      title: 'Bundle Id',
      key: 'id',
      render: (text: string, record: Bundle) => <span>{record.id}</span>
    },
    {
      title: '',
      key: 'actions',
      render: (text: string, record: Bundle) => <>
        <Button onClick={() => setDetails(record)}>Details</Button>
        <Button style={{marginLeft: 5}} onClick={(e:any) => {
          setData((oldData) => [...(oldData || []).filter((x: Bundle) => x.id !== record.id)]);
          removeBundle(e, record.id)
        }}>X</Button>
      </>
    }
  ], []);

  if (!data) {
    return <Styled>Loading...</Styled>;
  }
  if (details) {
    return (
      <Styled>
        <Details bundle={details} back={() => setDetails(null)} />
      </Styled>
    );
  }
  return (
    <Styled>
      <ATable
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={false}
        onRowClick={record => setDetails(record)}
      />
    </Styled>
  );
};

export default Table;
