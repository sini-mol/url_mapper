import { useQuery } from 'react-query';
import { useNotification } from '@strapi/helper-plugin';
import { fetchAllContentTypes } from '../utils/api';

const useAllContentTypes = () => {
  const toggleNotification = useNotification();
  const { isLoading, data, err } = useQuery('contentTypes', () =>
    fetchAllContentTypes(toggleNotification)
  );

  return { data, isLoading, err };
};

export default useAllContentTypes;
